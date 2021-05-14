source ~/.bashrc
cd peacockwiki
yarn
yarn build
cd ..
cp -r peacockwiki/build wiki
rm -rf peacockwiki
