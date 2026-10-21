import { describe, expect, it } from "vitest";

import { supportsNodeVersion } from "./runtimeVersion.js";

describe("supported Node.js versions", () => {
  it.each([
    ["20.0.0", false],
    ["22.18.9", false],
    ["22.19.0", false],
    ["22.23.3", false],
    ["22.23.4", true],
    ["22.23.4+build.1", true],
    ["22.99.0", true],
    ["23.0.0", false],
    ["24.10.9", false],
    ["24.11.0", false],
    ["24.22.0", false],
    ["24.22.1", true],
    ["24.22.1+build.1", true],
    ["24.99.0", true],
    ["25.1.0", false],
    ["26.0.0", false],
    ["26.12.0", false],
    ["26.12.1", true],
    ["26.12.1+build.1", true],
    ["27.0.0", true],
    ["24.22.1-rc.1", false],
    ["26.12.1-nightly.20261001", false],
    ["24.11", false],
    ["24.11.invalid", false],
    ["invalid", false],
  ])("classifies %s as supported=%s", (version, expected) => {
    expect(supportsNodeVersion(version)).toBe(expected);
  });
});
