pipeline {
    agent any

    stages {
        stage('Build and Push Docker Image') {
            steps {
                script {
                    def imageName = "nodeapp:latest"
                    def registryURL = "docker.io/theamalshibu" // Replace with your Docker Hub username

                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD ${registryURL}"
                    }

                    sh "docker build -t ${imageName} ."
                    sh "docker tag ${imageName} ${registryURL}/${imageName}"
                    sh "docker push ${registryURL}/${imageName}"
                }
            }
        }
    }
}

