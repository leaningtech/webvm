#include <sys/wait.h>
#include <unistd.h>
#include <errno.h>
#include <stdio.h>

int main()
{
	int status;

	pid_t p = getpid();
	// waitpid takes a children's pid, not the current process one
	// if the pid is not a children of the current process, it returns -ECHILD
	pid_t res = waitpid(1001, &status, WNOHANG);

	printf("res is %d, p is %d and errno is %d\n", res, p, errno);

}
