 pipeline {
   agent any
   stages {
     stage('Build') {
       steps {
         nodejs(nodeJSInstallationName: 'NodeJS 9.11.1') {
           sh 'npm install'
         }
       }
     }
     stage('Deploy') {
       steps {
         nodejs(nodeJSInstallationName: 'NodeJS 9.11.1') {
           sh 'ng serve --host 0.0.0.0'
         }
       }
     }
   }
 }
