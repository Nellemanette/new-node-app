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
                bat 'docker build -t local/app:latest .'
                bat 'docker run -p 3306:3306 local/app:latest'
            }
        }
    }
}