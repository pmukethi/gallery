pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
               git "https://github.com/pmukethi/gallery.git"
            }
        }
        stage('Install dependancies'){
            steps{
                sh "npm install"
            }
        }
        stage('Test'){
            steps{
                sh 'npm test'
            }
        }
        stage('Deploy'){
            steps{
                echo 'And Finally deploying!'
            }
        }
    }
}
