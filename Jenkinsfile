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
        script {
          // Login to Docker Hub and push the Docker image
          docker.withRegistry('docker.io', credentialsId: 'docker-hub-credentials') {
            docker.login()
            dockerImage.tag('docker.io/my-account/nodeapp:latest')
            dockerImage.push()
          }
        }
      }
    }
  }
}
