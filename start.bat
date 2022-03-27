title Bot anti raid
@echo off
color 4
openfiles > NUL 2>&1
if %errorlevel%==0 (
    echo Ouverture, droits d'admins vérifiées...
) else (
	cls
    echo BIP .. BOUP ... BIP
    echo.
    echo Est tu sur de vouloir lancer ce bot ? 
    echo.
    echo Une petite demande s'impose !
    echo Tu es oblige de l'ouvrir en tant qu'admin. 
    echo.
    echo Pour faire cela, clique droit et executer en tant qu'admin.
    echo.
    echo Appuyer sur n'importe quelle touche pour fermer..
    echo.
    echo Si vous avez un soucis avec la verification ou des questions go ici : https://discord.gg/JAzXerg8FM
    pause > NUL
    exit
)
cls

echo.
color 2
cls
echo ----------------------------------------------------------------------------------
echo Ce bot est cree pour eviter les RAID ! 
echo discord.gg/sinixleaks / https://discord.gg/JAzXerg8FM
echo ----------------------------------------------------------------------------------
echo Appuyez sur une touche pour lancer le timer de demarage !
pause >nul
cls
echo Lancement du timer !
echo En cours...
timeout /t 10 /nobreak 
cls
echo discord.gg/sinixleaks / https://discord.gg/JAzXerg8FM en cas de soucis , CECI EST LA PREMIER VERSION DU BOT ANTI RAID 
echo STATUS DU BOT :
cd C:\Users\Maximilien\bot discord ati raid\Bot_anti_raid\Bot anti raid
node index.js
pause >NUL