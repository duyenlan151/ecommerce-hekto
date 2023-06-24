import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false });
NProgress.setColor = (color) => {
  const style = document.createElement('style');
  style.textContent = `
  #nprogress .bar {
    background: ${color};
  }
  `;
  document.body.appendChild(style);
};

export default NProgress;
