export interface TestApi {
  greet(): Promise<any>
  health(): Promise<any>
}

// FIXME: magic constant
// FIXME: logging
export class TestApiImpl implements TestApi {
  async greet(): Promise<any> {
    try {
      const res = await fetch('http://10.0.2.2:8080')
      return res.json()
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async health(): Promise<any> {
    try {
      const res = await fetch('http://10.0.2.2:8080/health')
      return res.json()
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}

const singleton = new TestApiImpl()

export function getTestApi(): TestApi {
  return singleton
}
