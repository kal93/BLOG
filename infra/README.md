# Local Setup - Linux/Ubuntu

To create and start a pod based on yaml config
`minikube kubectl -- apply -f <file_name>.yaml`

To delete existing pod
`minikube kubectl -- delete -f <file_name>.yaml`

If you are using a vm driver, you will need to tell Kubernetes to use the Docker daemon running inside of the single node cluster instead of the host.

Run the following command:

`eval $(minikube docker-env)`

**Note - This command will need to be repeated anytime you close and restart the terminal session.**

Afterward, you can build your image:

`docker build -t USERNAME/REPO . `

Update, your pod manifest as shown above and then run:

`kubectl apply -f <file_name>.yaml`

https://minikube.sigs.k8s.io/docs/commands/docker-env/

# Bash alias for minikube kubectl --
Run `gedit ~/.bashrc` in your terminal.
Add below to end of file and save.

```
# Adds minikube kubectl -- alias for kubetenetes
alias kubectl="minikube kubectl --"
```

This will allow you use just `kubectl` instead of `minikube kubectl --` for every command.
