#include <unistd.h>

int main()
{
	link("env", "env3");
	return 0;
}
