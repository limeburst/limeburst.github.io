---
layout: post
title: OS X for Geeks
tags: archive
---

New to Mac and you're a geek? Stop poking around and read this first.

1. Get [Xcode](http://itunes.apple.com/us/app/xcode/id497799835?mt=12) from the Mac App Store, and get Command Line Tools at `Preferences > Downloads`. It includes some essential tools for programming.

2. Ditch the default Terminal.app and get [iTerm2](http://www.iterm2.com/). Even better with [Solarized](http://ethanschoonover.com/solarized).

3. Enable SSH. OS X Lion calls it Remote Login. You can enable it in System Preferences -> Sharing.

4. The version of GNU Screen that ships with Lion *still* does not split vertically. Read this [helpful guide](http://old.evanmeagher.net/2010/12/patching-screen-with-vertical-split-in-os) on how to upgrade.

5. Don't bother with MacPorts and get [Homebrew](http://mxcl.github.com/homebrew/). Now installing a new package is as easy as:

        brew install irssi

6. Edit your dotfiles. I type Hangul and terminal without Screen and colors sucks for me, so here's part of mine:

        .screenrc
        export LANG="en_US.UTF-8"
        encoding UTF-8
        defencoding UTF-8
        utf8 on
        defutf8 on
        shell bash	
        startup_message off

        .bash_profile
        export LANG="en_US.UTF-8"
        export LC_CTYPE="UTF-8"
        export CLICOLOR="true"

    After creating and editing `.bash_profile`, create a symbolic link for .`bashrc` like this:

        ln -s ~/.bash_profile ~/.bashrc

    And you're not a geek if you're looking for my .vimrc. Although [Powerline](http://github.com/Lokaltog/vim-powerline) and [ViTunes](http://danielchoi.com/software/vitunes.html) are pretty sweet.

Your Mac just became the best machine for programming and other geekery. Have fun!
