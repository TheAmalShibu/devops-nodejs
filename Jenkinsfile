pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        checkout scm
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}
