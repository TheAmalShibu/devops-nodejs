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
        // Login to Docker Hub
        docker.login('docker.io', credentialsId: 'docker-hub-credentials')

        // Push the Docker image to Docker Hub
        dockerImage.push()
      }
    }
  }
}
