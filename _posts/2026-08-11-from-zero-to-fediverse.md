---
layout: post
title: From 0 to Fediverse
---

*This is the text of my 15 minute talk at COSCUP 2026.*

## Abstract

[Oeee Cafe](https://oeee.cafe) is an oekaki service for the 2020s.

[Naru](https://naru.pub) is like Neocities, but for Koreans.

I launched these two projects without any social networking features, but they now ship with a Fediverse experience.

I'll be outlining how I started these web services, and how they gained Fediverse capabilities.

## Introduction

Hello everyone! My name is Jihyeok Seo (徐志赫), and I'm a software engineer from Korea.

I build web services for the public good, but really, I build whatever piques my interest. Recently, my projects have mostly had to do with my digital nostalgia.

I was born in 1994, and have been surfing the internet since the early 2000s. And I wanted the old web back.

## Two Projects

I want to introduce two projects that came out of this... some kind of homesickness.

One is Naru (나루), a free web hosting service mainly targeting Korean users.

The other is Oeee Cafe (오이카페), a message board built around a web-based drawing interface.

## Naru (나루)

Naru is a simple web service, where you can edit HTML, CSS, JavaScript, et cetera from the web browser and publish your website.

There are other similar services like the now-defunct Geocities, which was active from 1994 to 2009, or its spiritual successor, Neocities. Code forges like GitHub and Codeberg also provide web hosting via Git.

So what's different about Naru? When I first started building it, I didn't think that it needed a distinguishing feature for it to exist. The diversity alone was enough for me to start building Naru.

Looking back at Naru's small success in the Korean indie web scene, I think localizing the web interface to Korean, and making the website easy to use for newcomers were contributing factors.

Like any other country, Korea has its own distinct indie web aesthetic from the 90s, which I was happy to see reproduced in the 2020s, facilitated by Naru.

Here is a screenshot of Naru's homepage where we showcase recently updated websites hosted on Naru.

![Naru's homepage, showing a grid of thumbnails of recently updated websites hosted on Naru.](/assets/2026-08-11-from-zero-to-fediverse/naru-home.jpg)

## Oeee Cafe (오이카페)

Oeee Cafe is a website where you can draw on the web and upload it. Its name comes from the Japanese word oekaki (お絵かき), meaning doodle.

Oekaki drawing bulletin boards started popping up across the internet in the late '90s, and of course, I happened to stumble upon these as well.

I used to draw a lot using a ball mouse like these, but I remember being too shy to upload my own doodles.

![The underside of a yellowed Microsoft IntelliMouse with its rubber ball and retaining ring taken out.](/assets/2026-08-11-from-zero-to-fediverse/ball-mouse.jpg)

Anyway, I wanted oekaki boards to come back, so I built Oeee Cafe. Here's a screenshot:

![An Oeee Cafe post: a doodle of a green-haired character, with the author, publish time, drawing duration, community, reaction buttons, and a comment.](/assets/2026-08-11-from-zero-to-fediverse/oeee-cafe.jpg)

You can also replay how a drawing was made; a feat originally achieved with Java Applets back in the 90s.

<video controls loop muted playsinline src="/assets/2026-08-11-from-zero-to-fediverse/oeee-cafe-replay.mp4" title="Replaying how an Oeee Cafe drawing was made, stroke by stroke."></video>

## Fediverse

I was always interested in the social aspects of the web and the internet, so when I discovered the Fediverse around the time of Twitter's rebrand to X.com, it was a breath of fresh air.

However, the aspect of integrating my existing web services into the Fediverse wasn't very obvious to me until the release of Fedify, an ActivityPub server framework.

In my defense, I _did_ try writing a Fediverse-native application once, but I gave up on the idea because making my application interoperate with the rest of the Fediverse was _very_ tedious and time-consuming at that time.

## Oeee Cafe on the Fediverse

Anyway, after Fedify's release, I was again tempted to develop for the Fediverse ecosystem. This time, I didn't try to create a whole new thing from scratch, but tried to add Fediverse support into Oeee Cafe.

Oeee Cafe is written in Rust, so I searched for a Rust ActivityPub library, and found the [ActivityPub-Federation](https://github.com/LemmyNet/activitypub-federation-rust) crate from the Lemmy team.

Integrating ActivityPub-Federation into Oeee Cafe wasn't exactly painless, since the library's documentation was very sparse. But I did get it to work by referring frequently to the Lemmy source code.

So, what does it all _mean_ to add Fediverse support to an oekaki board whose origin dates back to the 90s? Let's take another look at the Oeee Cafe website screenshot; it's subtle, so focus on the details:

- The author's handle is `@eyecntct@oeee.cafe`. It's a full Fediverse handle!
- Seven _emoji_ reactions, sourced locally _and_ via federation. Remote users can react to Oeee Cafe drawings!
- Finally, remote replies to Oeee Cafe posts. Note the comment author's handle, it's from a remote instance!

![An Oeee Cafe post by @eyecntct@oeee.cafe with seven reactions and a reply from @liaizon@social.wake.st.](/assets/2026-08-11-from-zero-to-fediverse/oeee-cafe-fediverse.jpg)

This is how posts from Oeee Cafe show up in remote instances. In this case, Hackers' Pub. You can interact with Oeee Cafe posts from your instance, connecting social interactions across the Fediverse.

![The same Oeee Cafe post rendered in the Hackers' Pub timeline, with its reply thread.](/assets/2026-08-11-from-zero-to-fediverse/oeee-cafe-on-hackers-pub.jpg)

## Naru on the Fediverse

After successfully integrating Oeee Cafe into the Fediverse, I moved on to Naru. Naru is mostly written using TypeScript, so Fedify was a natural fit.

As I mentioned before, Naru hosts static websites. Static websites, they're complete in their own way. However, one thing that bothered me was that there was no easy way to notify your readership about updates to your little corner of the internet.

By adding Fediverse support to the Naru platform, it becomes possible to _follow_ static websites. For example, the website <https://yang.naru.pub> is assigned a Fediverse handle `@yang@naru.pub`. The screenshot depicts a Naru website as a followable entity on Hackers' Pub.

![The profile of @yang@naru.pub on Hackers' Pub, followable, with a post announcing an update to https://yang.naru.pub/.](/assets/2026-08-11-from-zero-to-fediverse/naru-on-hackers-pub.jpg)

## Develop for the Fediverse!

I have demonstrated that it is possible to add Fediverse support to existing services successfully.

In Naru's case, the tedious task of polling your favorite websites for updates is replaced with an effective way to stay connected with the indie web community.

In Oeee Cafe's case, this enables otherwise isolated communities to extend their reach across the wider social network.

Opening up your services to the Fediverse isn't all sunshine and rainbows; moderation is real work, and bad actors exist. But that's true of any social space worth having, and it's a solved-enough problem that it shouldn't stop you.

The bigger point is this: you don't need to build a new Mastodon or a new Twitter to join the Fediverse. You can take something you've already built – a drawing board, a web host, whatever piques your interest – and give it a voice in a network of millions. The tools are here now. Fedify, activitypub-federation... The tedious part I gave up on years ago is largely done for you.

So my ask is simple: take one thing you've made, and let it federate. Bring your corner of the old web into this one.

Thank you!
