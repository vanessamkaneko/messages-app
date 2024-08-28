import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {
  // com o public, o argumento do constructor automaticamente se torna uma propriedade da classe
  // ainda não é a melhor forma de se fazer... o melhor jeito é usando interfaces (como no da rocket 2021)
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll()
  }

  create(content: string) {
    return this.messagesRepo.create(content)
  }
}