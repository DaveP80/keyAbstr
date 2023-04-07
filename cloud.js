/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = async (req, res) => {
    try {
    var origin = req.get('Origin')
      if (origin == 'https://example.com' || origin == 'null')
      {
        res.set('Access-Control-Allow-Origin', origin);
        res.status(200).send({"key": "your_key"});
      }   
    } catch (error) {
      res.status(500).send('An error occurred');
    }
  };  