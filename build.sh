curl -fsSL https://yarnpkg.com/install.sh | bash
cd peacockwiki
yarn
yarn build
cd ..
cp -r peacockwiki/build wiki
rm -rf peacockwiki
