pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        checkout scm
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}
