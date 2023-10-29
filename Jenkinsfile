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

    stage('Build Docker Image') {
      steps {
        // Build a Docker image for your Node.js application
        script {
          def imageName = "my-node-app:latest"
          def dockerFile = "Dockerfile" // Path to your Dockerfile

          sh "docker build -t ${imageName} -f ${dockerFile} ."
        }
      }
    }

    stage('Push Docker Image') {
      steps {
        // Push the Docker image to a Docker registry (e.g., Docker Hub)
        script {
          def imageName = "my-node-app:latest"
          def registryURL = "docker.io/your-username" // Replace with your Docker Hub username

          withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable:
 
'DOCKER_USERNAME', passwordVariable:
 
'DOCKER_PASSWORD')]) {
            sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD ${registryURL}"
          }
          
          sh "docker tag ${imageName} ${registryURL}/${imageName}"
          sh "docker push ${registryURL}/${imageName}"
        }
      }
    }

    stage('Deploy') {
      steps {
        // Deploy your application (modify this step according to your deployment process)

        
// This could involve running your Docker image on a container orchestration platform like Kubernetes.
        sh 'kubectl apply -f deployment.yaml'
      }
    }
  }
}
