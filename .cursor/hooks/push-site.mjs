import { execSync } from 'node:child_process';

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
  run('git push origin HEAD');
} catch {
  // Leave the working tree as-is if git cannot publish this turn.
}

process.stdout.write('{}\n');
