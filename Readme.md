# Trying ZeroMQ Node.js

## Default purpose of Javascript is Asynchronous

### Javascipt ES2017 new Asynchronous Feature

- **Promise** สัญญาว่าจะทำให้เรา ถ้าทำเสร็จ / ทำได้ สถานะเป็น resolved ถ้าทำไม่เสร็จ แล้วต้องไปทำใน catch block สถานะจะเป็น Reject

        Promise(resolve => setTimeout(resolve, 500))

หมายถึงถ้ามัน resolve หรือ สำเร็จให้ทำอย่างนี้ ??

- **async** เป็นตัวบอกว่า Function นี้ เป็น Asynchromous

- **await** เป็นการบอกว่าฟังก์ชั่น หรือ คำสั่งนี้ คือ ให้คำสั่งนี้ทำงานเสร็จก่อน แล้วค่อย return ค่าออกไป

## Message Queing with ZeroMQ

มีการทดลองทั้งแบบ Push/Pull (Pipeline) และ Publish / Subscriber จากการทดลอง

- **Push/Pull** เหมือนกับเราเปิด Pulling server ที่เรียกว่า worker หรือ consumer ไว้ แล้วเปิด asynchronous function เปิดรอการเข้ามาของข้อความ
- **Publish/Subscriber** subscrober จะตั้งค่าไว้ค่าหนึ่ง เพื่อ subscribe จากค่านั้น เมื่อมีการส่งค่านั้นเป็น key มาเมื่อไหร่ โปรแกรมก็จะรับข้อมูลตรงนั้น

## วิธีการเล่นจากโปรแกรม

- clone git และ `npm install`
- เล่น publish/subscribe รันสอง Terminal โดยใช้คำสั่ง `npm run publish` และ อีก Terminal ใช้คำสั่ง `npm run subscribe`
- เล่น push/pull รัน 2 terminal ตัว Pulling รันโดยใช้คำสั่ง `npm run worker` จากนั้นเข้าหน้าเว็บ localhost:3330 เพื่อเริ่มโปรแกรม ส่วน Terminal อีกตัวใช้คำสั่ง `npm run produce`

## Useful Syntax

- สร้าง Socket โดยใช้คำสั่ง

        const zmq = reqire("zeromq")
        var sock = new zmq.__ชนิดของมัน___

  เช่นกรณีเป็น Produce หรือ Push ก็จะเป็น

        var sock = new zmq.Push()

- ฝั่งส่ง (Publish และ Push)ใช้ bind ในการผูกตัวเองกับ Port ฝั่งรับ (Subscribe และ Pull)ใช้ connect ในการเชื่อมเข้าไปในการเชื่อมต่อ เช่น

        await sock.bind("tcp://127.0.0.1:3000")

หากฝั่งรับต้องการรับข้อความจาก port 3000 ก็จะเขียนเป็น

        sock.connect("tcp:127.0.0.1:3000")


# Reference and Other Resource

- [PanJ's Blog](https://blog.panjmp.com/async-await-%E0%B9%80%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81-syntax-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%88%E0%B8%B0%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B8%82%E0%B8%AD%E0%B8%87-javascript-%E0%B8%81%E0%B8%B1%E0%B8%99-3f02091eca05)
- https://github.com/zeromq/zeromq.js/
