import styles from './GameModal.module.scss';

function GameModal() {
  return (
    <iframe
      className={styles.iframe}
      title="Game"
      sandbox="allow-same-origin allow-scripts"
      allow="fullscreen; screen-wake-lock"
      src="https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=piratehunter&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True"
    ></iframe>
  );
}

export default GameModal;
