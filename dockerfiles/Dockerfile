FROM --platform=i386 i386/debian:buster
RUN apt-get clean && apt-get update && apt-get upgrade
# Quite some packages we dont use i386 for, why?
RUN apt-get -y install apt-utils clang curl git \
	python3 vim wget ssh ruby  udev perl unzip  \
	fakeroot dbus base whiptail hexedit git-man \
	patch wamerican ucf xauth manpages file luajit net-tools \
	build-essential

CMD [ "/bin/bash" ]