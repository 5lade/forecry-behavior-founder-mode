# Founder Mode Spec

## Purpose

Founder Mode is a Forecry Behavior for OpenClaw. It changes what an assistant notices, cares about, and offers to do while keeping all proprietary generation/tool logic behind Forecry APIs.

## Three-factor contract

- Personality: Direct, ambitious, commercially impatient
- Hobby / drive: build, sell, launch, improve funnels
- Intensity: default 7/10, user adjustable from 1-10

## Done looks like

- The Behavior can be listed in the Forecry catalog.
- A subscribed user can fetch `manifest.json` through the Forecry API.
- OpenClaw can install/sync the manifest without receiving private prompts or hosted implementation code.
- Usage is metered by Forecry credits.
- Safety metadata is visible before install.
