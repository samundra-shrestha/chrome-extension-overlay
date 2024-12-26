
import './App.css'

function App() {

  const onClick = async () => {
    console.log('clicked');
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // const [tab] = await chrome.tabs.query

    console.log(chrome);
    chrome.scripting.executeScript({
      target: {tabId: tab.id!},
      func: () => {
        // document.body.style.backgroundColor = 'red';
      document.querySelectorAll('.overlay.ytd-reel-video-renderer').forEach((el) => {
        (el as HTMLElement).style.opacity = '0';
      });
      }
    });
  }

  return (
    <>
      <div className="card">
        <button onClick={() => onClick()}>
      Click me
        </button>
        <p>
          Click to remove Youtube shorts video overlay
        </p>
      </div>
    </>
  )
}

export default App
