## Context

The post file `_posts/2026-08-01-setup-vpn-server-on-vps.adoc` already has updated AsciiDoc document attributes (title, navtitle, excerpt) and a placeholder section heading "Why I want my own vpn server." The body content needs to be written from scratch.

The Jekyll site renders `.adoc` files via `jekyll-asciidoc`. Content is written in AsciiDoc markup. The layout (`_layouts/default.html`) expects `page.navtitle` and `page.excerpt` attributes for sidebar and listing display.

## Goals / Non-Goals

**Goals:**
- Write a complete, practical guide readers can follow to set up their own VPN server on a VPS
- Cover VPS provider selection with concrete recommendations
- Compare VPN technologies (WireGuard, OpenVPN, Xray/VLESS+XTLS-Reality) for GFW circumvention
- Provide step-by-step 3x-ui panel installation and configuration instructions
- Cover client-side configuration for three platforms: Android smartphone, macOS (MacBook Pro), and Windows
- Use AsciiDoc formatting (code blocks, admonitions, lists, links) appropriately

**Non-Goals:**
- Client setup for platforms beyond Android, macOS, and Windows (no iOS, Linux desktop, routers, etc.)
- Deep protocol internals (keep comparisons practical and actionable)
- Ongoing maintenance or monitoring beyond basic setup

## Decisions

### Content structure (top-down narrative)

1. **Why own VPN server** — Personal motivation, cost vs. commercial VPN, control/ownership
2. **Choose a VPS provider** — Concrete setup used: Vultr Cloud Compute plan (1 vCPU, 1 GB RAM, 25 GB NVMe). Also discuss criteria (bandwidth, location near China, GFW risk) and compare alternatives.
3. **Install Ubuntu 26.04 LTS** — Provision the VPS with Ubuntu 26.04 LTS, initial SSH setup and basic hardening
4. **VPN technology comparison** — WireGuard (fast but easily detected), OpenVPN (mature, slower), Xray VLESS+XTLS-Reality (best anti-GFW, mimics HTTPS to known sites). Conclusion: recommend Xray VLESS+XTLS-Reality for the primary setup, mention WireGuard as a lightweight alternative.
5. **Install xray-core** — Install xray-core via the official installation script
6. **Install 3x-ui** — What it is (web panel for Xray configuration), install via script, initial access setup
7. **Configure via 3x-ui** — Add inbound with VLESS+XTLS-Reality, set Reality destination, generate keys, configure fallback
8. **Client setup** — Step-by-step configuration per platform:
   - **Android** — v2RayTun: install from Google Play or GitHub releases, import config via QR code or subscription link from 3x-ui, enable proxy
   - **macOS (MacBook Pro)** — V2BOX: install from App Store or GitHub releases, import config via subscription link or QR code, toggle proxy on
   - **Windows** — v2rayN (v6+): install from GitHub releases, import config via subscription link or QR code, set system proxy mode
9. **Testing** — How to verify the connection works on each platform
10. **References** — Curated list of blog posts, documentation, and GitHub repos that informed this guide (official 3x-ui docs, Xray-core project, community tutorials). Use AsciiDoc `link:` macros with descriptive link text

### Technology recommendation

Primary recommendation: **Xray-core with VLESS + XTLS-Reality** via **3x-ui** web panel.

Rationale:
- VLESS+XTLS-Reality is currently the most effective protocol for escaping GFW detection — it masquerades traffic as legitimate TLS to a real destination (e.g., microsoft.com)
- 3x-ui dramatically simplifies Xray configuration with a web GUI, eliminating error-prone manual JSON editing
- WireGuard and OpenVPN mentioned for completeness and as fallback options

### AsciiDoc conventions

- Use `==` for major sections, `===` for sub-sections
- Use `[source,bash]` code blocks for shell commands
- Use `[NOTE]` admonitions for tips and warnings
- Use `TIP: ` (inline) for short hints

## Risks / Trade-offs

- **Content may age** → VPS pricing and provider availability change over time. Mitigation: keep recommendations general enough to remain useful, mention this in the post.
- **3x-ui panel may change** → The project is actively developed; UI screenshots or exact settings may differ. Mitigation: describe the conceptual steps, not pixel-perfect UI instructions.
- **GFW countermeasures evolve** → VLESS+XTLS-Reality is current best practice but the GFW adapts. Mitigation: include WireGuard as a simpler fallback protocol.
