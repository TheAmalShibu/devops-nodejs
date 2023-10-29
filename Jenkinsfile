pipeline {
  agent any
  stages {
    stage('Build and Test') {
            steps {
                // Install dependencies and run tests
                sh 'npm install'
                sh 'node --version'
                sh 'npm --version'
            }
        }
 
        stage('Deploy') {
            steps {
                // Deploy your application (modify this step according to your deployment process)
                sh 'npm start'
            }
        }
    }
}
