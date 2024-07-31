import "./mainbody.css";

function MainBody(props) {
  const { children } = props;

  return (
    <div className="App-body">
      <div className="test-sidebar">
        <nav className="App-sidebar">
          <a href="#home">หน้าแรก</a>
          <a href="#services">บริการ</a>
          <a href="#about">เกี่ยวกับเรา</a>
          <a href="#contact">ติดต่อเรา</a>
          <a href="#contact">ติดต่อเรา</a>
        </nav>
      </div>

      <main className="App-content">
        <item />
        <div className="App-card">
          <h2>หัวข้อเนื้อหา</h2>
          <p>
            นี่คือตัวอย่างของเนื้อหาบนหน้าเว็บของคุณ คุณสามารถเพิ่มข้อความ
            รูปภาพ หรือวิดีโอได้ตามต้องการ
          </p>
        </div>
      </main>
    </div>
  );
}

export default MainBody;
