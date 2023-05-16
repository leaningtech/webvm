FROM --platform=i386 i386/debian:buster
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get clean && apt-get update && apt-get -y upgrade
RUN apt-get -y install apt-utils gcc \
	python3 vim unzip ruby nodejs \
	fakeroot dbus base whiptail hexedit \
	patch wamerican ucf manpages \
	file luajit make lua50 dialog curl \
	less
RUN useradd -m user
COPY --chown=user:user ./examples /home/user/examples
RUN chmod -R +x  /home/user/examples/lua
CMD [ "/bin/bash" ]
