# Rust PDF Guard

Rust PDF Guard is a memory-safe PDF pre-screening engine designed to detect potentially malicious or malformed PDF files.  
It is implemented in Rust with optional WebAssembly (WASM) support for web-based client-side pre-screening.

The tool performs static analysis to detect:
- Embedded JavaScript code (`/JavaScript`, `/JS`)
- Malicious `/Launch` actions
- Suspicious `/OpenAction` triggers
- External URI and UNC file paths
- Embedded ZIP archives inside PDF object streams
- High-entropy streams that may indicate obfuscation or payloads

Rust PDF Guard is suitable for:
- File upload screening
- Zero-trust document gateways
- Cloud storage preprocessing
- Malware forensics research

---

## Repository

Official repository: [https://github.com/chinnapongpsu/rust-pdfguard](https://github.com/chinnapongpsu/rust-pdfguard)

---

## Quick Build Guide

### Build everything

To build the entire project (native Rust + WebAssembly module), simply run:

./build_pdfguard.sh
This will handle the Rust compilation and wasm-pack build process automatically.
Native Rust Usage

Prerequisites
Rust toolchain installed: https://rustup.rs/
Run local analysis
cargo run -- ./testpdf/sample.pdf
Replace ./testpdf/sample.pdf with your actual file path.

### WebAssembly Build (for browser integration)

Install wasm-pack if not installed:
cargo install wasm-pack
Manual WASM build (optional)
If you don't use the provided build_pdfguard.sh, you can manually build:

wasm-pack build --release
The WebAssembly output will be generated in the pkg/ directory.

### Demo Web Frontend

A complete example demo project is provided under demo/.

cd demo
yarn install
../install_pdfguard_wasm_to_demo.sh

This will copy the WebAssembly files to the correct location in the demo project.

### Run the demo app
yarn dev
Open your browser and test the full WASM-powered PDF scanner in your browser.


### License

MIT License

