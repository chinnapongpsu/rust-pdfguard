cargo install wasm-pack
wasm-pack build --release --target web

rm -rf demo/src/rust
mkdir demo/src/rust
cp -r ./pkg/ ./demo/src/rust

echo "Rust PDF Guard has been copied to the demo project in demo/src/rust"