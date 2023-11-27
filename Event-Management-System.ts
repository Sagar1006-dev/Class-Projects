// interface Event {
//     id: number;
//     name: string;
//     date: string;
//     register(user: User): void;
//     attend(user: User): void;
//     provideFeedback(user: User, feedback: string): void;
//   }
  
//   class User {
//     id: number;
//     name: string;
    
//     constructor(id: number, name: string) {
//       this.id = id; 
//       this.name = name;
//     }
//   }
  
//   class EventManager implements Event {
//     id: number;
//     name: string;
//     date: string;
//     registrants: User[] = [];
//     attendees: User[] = [];
//     feedbacks: { user: User, feedback: string }[] = [];
    
//     constructor(id: number, name: string, date: string) {
//       this.id = id;
//       this.name = name;
//       this.date = date;
//     }
//       bubbles: boolean;
//       cancelBubble: boolean;
//       cancelable: boolean;
//       composed: boolean;
//       currentTarget: EventTarget | null;
//       defaultPrevented: boolean;
//       eventPhase: number;
//       isTrusted: boolean;
//       returnValue: boolean;
//       srcElement: EventTarget | null;
//       target: EventTarget | null;
//       timeStamp: number;
//       type: string;
//       composedPath(): EventTarget[] {
//           throw new Error("Method not implemented.");
//       }
//       initEvent(type: string, bubbles?: boolean | undefined, cancelable?: boolean | undefined): void {
//           throw new Error("Method not implemented.");
//       }
//       preventDefault(): void {
//           throw new Error("Method not implemented.");
//       }
//       stopImmediatePropagation(): void {
//           throw new Error("Method not implemented.");
//       }
//       stopPropagation(): void {
//           throw new Error("Method not implemented.");
//       }
//       NONE: 0;
//       CAPTURING_PHASE: 1;
//       AT_TARGET: 2;
//       BUBBLING_PHASE: 3;
    
//     register(user: User): void {
//       this.registrants.push(user);
//     }
    
//     attend(user: User): void {
//       const index = this.registrants.findIndex(u => u.id === user.id);
//       if (index !== -1) {
//         this.attendees.push(user);
//         this.registrants.splice(index, 1);
//       }
//     }
    
//     provideFeedback(user: User, feedback: string): void {
//       this.feedbacks.push({ user, feedback });
//     }
    
//     getRegistrants(): User[] {
//       return this.registrants;
//     }
    
//     getAttendees(): User[] {
//       return this.attendees;
//     }
    
//     getFeedback(): { user: User, feedback: string }[] {
//       return this.feedbacks;
//     }
//   }
  

//   const eventManager = new EventManager(1, 'My Event', '2023-05-01');

// const user1 = new User(1, 'John');
// const user2 = new User(2, 'Jane');

// eventManager.register(user1);
// eventManager.register(user2);

// eventManager.attend(user1);

// eventManager.provideFeedback(user1, 'Great event!');
// eventManager.provideFeedback(user2, 'Could be better.');

// console.log(eventManager.getRegistrants()); 
// console.log(eventManager.getAttendees());
// console.log(eventManager.getFeedback());