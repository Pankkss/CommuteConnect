#! bin/bash 

sudo rm -rf /var/www/CommuteConnect.company/;
sudo cp -a ~/CommuteConnect/_Angular/CommuteConnect/docs /var/www/CommuteConnect.company;
sudo cp -a /var/www/CommuteConnect.company/CommuteConnect;
. ~/test/myvenv/bin/activate;
python ~/test/server.py;