import "./index.css";

function App() {
  return (
    <>
      <div>
        <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
          <div className="flex items-center gap-4">
            <img src="netflix.png" className="w-16 sm:w-28" />
            <a href="#">Phim</a>
            <a href="#">Truyền Hình</a>
          </div>
          <div className="cursor-pointer">Font Awesome</div>
        </header>
      </div>
    </>
  );
}

export default App;
