import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id]
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999)

    messages[id] = { id, content }

    // {
    //   12: { id: 12, content: "aaa" },
    //   13: { id: 13, content: "kakaka" }
    // }

    await writeFile('messages.json', JSON.stringify(messages))
  }
}