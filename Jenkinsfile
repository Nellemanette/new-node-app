pipeline {
    agent any

    stages {
        stage('Pull') {
            steps {
                git([url:'https://github.com/Nellemanette/new-node-app.git/', branch:'master'])
            }
        }
        stage('Build') {
            steps {
                bat 'echo "banane"'
            }
        }
    }
}