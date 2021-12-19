echo off
cls
echo ouvrer le naviguateur sur votre tele et entrer cette url :
echo votreip/tv
echo pour savoir votre IP regarder ci-dessous(votre carte wifi)
ipconfig
pause
cls
start http://localhost
echo le serveur a ete lancé
node index.js