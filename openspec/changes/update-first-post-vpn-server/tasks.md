## 1. Post Introduction

- [x] 1.1 Write "Why I want my own vpn server" section — explain personal motivation, cost vs. commercial VPN, control/ownership advantages

## 2. VPS Provider Selection

- [x] 2.1 Write "Choose a VPS provider" section — describe the Vultr Cloud Compute plan used (1 vCPU, 1 GB RAM, 25 GB NVMe), discuss criteria (bandwidth, location near China, GFW risk), compare alternatives

## 3. OS Setup

- [x] 3.1 Write "Install Ubuntu 26.04 LTS" section — provision VPS with Ubuntu 26.04 LTS, initial SSH access, basic security hardening (disable root login, set up firewall)

## 4. VPN Technology Comparison

- [x] 4.1 Write "VPN technology comparison" section — evaluate WireGuard (fast, easily detected), OpenVPN (mature, slow), Xray VLESS+XTLS-Reality (best anti-GFW, mimics real HTTPS), conclude with recommendation

## 5. Server Setup

- [x] 5.1 Write "Install xray-core" section — install xray-core via the official installation script with `[source,bash]` blocks
- [x] 5.2 Write "Install 3x-ui" section — introduce 3x-ui web panel, install via script, initial web UI access setup
- [x] 5.3 Write "Configure via 3x-ui" section — add VLESS+XTLS-Reality inbound, set Reality destination, generate keys, configure fallback

## 6. Client Setup

- [x] 6.1 Write Android client setup — v2RayTun: install from Google Play/GitHub, import config via QR code or subscription link from 3x-ui, enable proxy
- [x] 6.2 Write macOS (MacBook Pro) client setup — V2BOX: install from App Store/GitHub, import config via subscription link or QR code, toggle proxy on
- [x] 6.3 Write Windows client setup — v2rayN (v6+): install from GitHub releases, import config via subscription link or QR code, set system proxy mode

## 7. Testing

- [x] 7.1 Write testing section — how to verify the connection works on each platform, basic troubleshooting tips

## 8. References

- [x] 8.1 Add references section — curated list of blog posts, official docs, GitHub repos with AsciiDoc `link:` macros

## 9. Review

- [x] 9.1 Review post for AsciiDoc syntax correctness (code blocks, admonitions, headings)
- [x] 9.2 Review post for content accuracy and clarity
