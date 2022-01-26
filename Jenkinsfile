pipeline {
    agent any

    stages {
        stage('Pull') {
            steps {
                git([url:'https://github.com/Nellemanette/new-node-app.git', branch:'master'])
            }
        }
        stage('Build') {
            steps {
                bat 'echo "banane"'
                bat 'Docker --version'
            }
        }
        stage('Docker Build') {
            agent any
            steps {
                sh 'docker build -t new-node-app:latest .'
            }
        }
    }
}