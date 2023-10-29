pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        // Build the Docker image
        sh 'docker build -t my-image:latest . '
      }
    }

    stage('Push to Docker Hub') {
      steps {
        script {
          // Push the Docker image to Docker Hub
          docker.withRegistry('docker.io', credentialsId: 'docker-hub-credentials') {
            dockerImage.push()
          }
        }
      }
    }
  }
}
