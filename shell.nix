with (import <nixpkgs> {});
mkShell {
  buildInputs = [
    nodejs
    yarn
  ];
  shellHook = ''
    echo "Time to develop!"
  '';
}
