pipeline {
    agent any

    stages {
        stage('Build and Push Docker Image') {
            steps {
                script {
                    def imageName = "nodeapp:latest"
                    def registryURL = "docker.io/theamalshibu" // Replace with your Docker Hub username
	            sh "docker login -u theamalshibu -p dckr_pat_hSKAT_-bjvhc2t2l6QtQcN03r2c ${registryURL}"
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "docker login -u theamalshibu -p dckr_pat_hSKAT_-bjvhc2t2l6QtQcN03r2c ${registryURL}"
                    }

                    sh "docker build -t ${imageName} ."
                    sh "docker tag ${imageName} ${registryURL}/${imageName}"
                    sh "docker push ${registryURL}/${imageName}"
                }
            }
        }
    }
}

