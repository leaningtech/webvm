#include <fcntl.h>
#include <stdio.h>
#include <errno.h>

int main()
{
	int ret = openat(AT_FDCWD, "/dev/tty", 0x88102, 0);
	printf("return value is %d and errno is %d\n", ret, errno);
}

