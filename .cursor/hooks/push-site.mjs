import { execFileSync, execSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function readStdin() {
  if (process.stdin.isTTY) return Promise.resolve('');
  return new Promise((resolve) => {
    let data = '';
    const timer = setTimeout(() => resolve(data), 400);
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => {
      data += chunk;
    });
    process.stdin.on('end', () => {
      clearTimeout(timer);
      resolve(data);
    });
    process.stdin.resume();
  });
}

function run(command) {
  return execSync(command, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

function deployToken() {
  const command = `
$ptr = [IntPtr]::Zero
Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
public class MickHookCred {
  [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
  public struct CREDENTIAL {
    public uint Flags; public uint Type; public string TargetName; public string Comment;
    public System.Runtime.InteropServices.ComTypes.FILETIME LastWritten;
    public uint CredentialBlobSize; public IntPtr CredentialBlob; public uint Persist;
    public uint AttributeCount; public IntPtr Attributes; public string TargetAlias; public string UserName;
  }
  [DllImport("advapi32", SetLastError=true, CharSet=CharSet.Unicode)]
  public static extern bool CredRead(string target, uint type, uint reservedFlag, out IntPtr credential);
  [DllImport("advapi32", SetLastError=true)]
  public static extern bool CredFree(IntPtr credential);
}
"@
if (-not [MickHookCred]::CredRead('gh:github.com:AAAA-web-deploy', 1, 0, [ref]$ptr)) { exit 1 }
$cred = [Runtime.InteropServices.Marshal]::PtrToStructure($ptr, [type][MickHookCred+CREDENTIAL])
$bytes = New-Object byte[] ([int]$cred.CredentialBlobSize)
[Runtime.InteropServices.Marshal]::Copy($cred.CredentialBlob, $bytes, 0, $bytes.Length)
[MickHookCred]::CredFree($ptr) | Out-Null
$text = [Text.Encoding]::Unicode.GetString($bytes).Trim([char]0)
if ($text -notmatch '^(ghp_|github_pat_|gho_)') { $text = [Text.Encoding]::UTF8.GetString($bytes).Trim([char]0) }
Write-Output $text
`;
  return execFileSync('powershell', ['-NoProfile', '-Command', command], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
}

function pushMain() {
  const token = deployToken();
  const askpass = join(dirname(fileURLToPath(import.meta.url)), 'askpass.cmd');
  execFileSync('git', ['-c', 'credential.helper=', 'push', 'origin', 'HEAD'], {
    env: {
      ...process.env,
      GIT_TERMINAL_PROMPT: '0',
      GIT_ASKPASS: askpass,
      MICK_SECRET: token,
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

await readStdin();

try {
  const status = run('git status --porcelain').trim();
  if (!status) {
    process.stdout.write('{}\n');
    process.exit(0);
  }

  if (status.split('\n').some((line) => /\.env|credential|id_rsa|secret/i.test(line))) {
    process.stdout.write('{}\n');
    process.exit(0);
  }

  const branch = run('git rev-parse --abbrev-ref HEAD').trim();
  if (branch !== 'main') {
    process.stdout.write('{}\n');
    process.exit(0);
  }

  run('git add -A');
  execSync('git commit -m "Update the MIC PICKED WHO?! site."', {
    env: {
      ...process.env,
      GIT_AUTHOR_NAME: 'jackpot',
      GIT_AUTHOR_EMAIL: '336471979+JackMiller825@users.noreply.github.com',
      GIT_COMMITTER_NAME: 'jackpot',
      GIT_COMMITTER_EMAIL: '336471979+JackMiller825@users.noreply.github.com',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  pushMain();
} catch {
  // Leave the working tree as-is if git cannot publish this turn.
}

process.stdout.write('{}\n');
