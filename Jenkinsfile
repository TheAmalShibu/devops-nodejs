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
        docker.login()

        // Tag the Docker image
        dockerImage.tag('docker.io/my-account/nodeapp:latest')

        // Push the Docker image to Docker Hub
        dockerImage.push()
      }
    }
  }
}
