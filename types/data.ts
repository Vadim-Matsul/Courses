type Info = {
  desc : string,
  isActive : boolean
}

type Tags = {
  name : string,
  value : number
}

type User = {
  userId : number,
  id : number,
  title : string
  info : Info,
  tags : Tags[]
}

let obj:User = {
  userId: 1,
    id: 1,
      title: "delectus aut autem",
        info: {
    desc: "delectus aut autem",
      isActive: true
  },
  tags: [
    {
      name: "my name",
      value: 1000
    }
  ]
}

export {};
