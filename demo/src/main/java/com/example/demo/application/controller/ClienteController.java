package com.example.demo.application.controller;

import com.example.demo.domain.models.Cliente;
import com.example.demo.domain.services.ClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cliente")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:5175")
public class ClienteController {

    private final ClienteService clienteService;

    @GetMapping()
    public List<Cliente> listarClientes(){
        return clienteService.listarClientes();
    }

    @PostMapping()
    public ResponseEntity guardarCliente(@RequestBody Cliente cliente){
        clienteService.guardarCliente(cliente);
        return ResponseEntity.ok(Map.of("Cliente guardado correctamente","C"));
    }

    @PutMapping
    public ResponseEntity actualizarCliente(@RequestBody Cliente cliente){
        clienteService.editarCliente(cliente);
        return ResponseEntity.ok(Map.of("Cliente actualizado correctamente","C"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity eliminarCliente(@PathVariable Long id){
        clienteService.eliminarCliente(id);
        return ResponseEntity.ok(Map.of("Cliente eliminado correctamente","C"));
    }

}
