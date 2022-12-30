module.exports = {
    apps: [
        {
            name: "translator_bot_server",
            script: "src/bot.js",
            instances: 1,
            exec_mode: 'cluster',
            wait_ready: true,
            listen_timeout: 5000,
            kill_timeout: 5000,
            autorestart: true,
            watch: false,
            log_date_format: 'YYYY-MM-DD HH:mm:ss',
            max_memory_restart: "1G",
        }
    ],
    deploy: {
        production: {
            user: "ubuntu",
            host: "personal-server",
            ref: "origin/main",
            ssh_options: "ForwardAgent=yes",
            repo: "https://proxima2182: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@github.com/proxima2182/RitaBot.git",
            path: "/home/ubuntu/server/translator-bot",
            env: {
                NODE_ENV: "production",
            },
            "post-deploy":
                "yarn install && yarn build && yarn serve",
        },
    },
};
