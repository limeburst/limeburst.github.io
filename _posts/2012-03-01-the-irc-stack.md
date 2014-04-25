---
layout: post
title: The IRC Stack
---

The terminal IRC client `irssi` is set up to proxy the IRC connection to its clients.

    /set irssiproxy_password password
    /set irssiproxy_ports Ozinger=2777

Tell `irssi` to start the proxy server when it starts.

    ~/.irssi/startup
    load proxy

Now set up cron to start `irssi` inside GNU Screen on reboot.

    $ crontab -e
    @reboot /usr/bin/screen -d -m /usr/bin/irssi -S irssi

Once the proxy is set up and `irssi` is always running, it's up to you to choose which client to use. If you want to chat using the terminal, just connect to the detached Screen session.

    screen -RAD irssi

To chat using an iPhone, set up [Colloquy](http://colloquy.info/) bouncer in your Mac, and get [Mobile Colloquy](http://colloquy.mobi/). I set the bouncer on my Mac to listen on some random port(like, 4694) because my 3G network doesn't allow me to connect to IANA IRC ports.

To view my logs with a web browser, I use [irclog](http://pypi.python.org/pypi/irclog). Set the `irssi` autolog path, and run the built-in `irclog` web server.

~~~
/set autolog_path ~/.irssi/log/$tag/$0/%Y-%m-%d.log
$ python -m irclog.web.server \
         -p 80 \
         $HOME/.irssi/log/<server>/<channel>/<date:%Y-%m-%d>.log
~~~

Happy chatting!
