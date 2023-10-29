pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        // Build the Docker image
        sh 'docker build -t nodeapp:latest . '
      }
    }

    stage('Push to Docker Hub') {
      steps {
        // Push the Docker image to Docker Hub
        docker.withRegistry('docker.io', credentialsId: 'docker-hub-credentials') {
          dockerImage.push()
        }
      }
    }
  }
}
