---
layout: post
title: "Elliptic: Curve25519 러스트 바인딩"
---

[Facebook](https://www.facebook.com/limeburst/posts/10207665507786567) 최초 게시:

> [https://github.com/limeburst/elliptic](https://github.com/limeburst/elliptic)

> Curve25519 키로 Ed25519 서명과 검증을 할 수 있게 해주는 Rust 라이브러리를 릴리즈 하였습니다. 무류의 [트레버 페렝](https://github.com/trevp) 씨의 코드를 바인딩하였습니다.

> 서명과 AEAD를 위해 같은 키 머티리얼을 Curve25519와 Ed25519 두 가지 형태로 함께 저장했거나, 암호학 라이브러리에서 Ed25519 에서의 전환만 지원하여 곤란했다면 이 라이브러리를 사용하면 됩니다.

> 타원 곡선 키 포맷 단일화와, 관련된 토론은 [해당 쓰레드](https://moderncrypto.org/mail-archive/curves/2015/000376.html)를 포함한 [Modern Crypto](https://moderncrypto.org)의 curves 메일링 리스트에서 이루어지고 있습니다.
